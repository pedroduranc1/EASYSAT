import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { Stripe } from "stripe";
import { services } from "../../assets/services";
import { User } from "../fb.user";

const userCtrl = new User()

export async function getSubsEmails() {
  const key = import.meta.env.VITE_STRIPE_SECRET_KEY;
  const stripe = new Stripe(key);

  const subsList = await stripe.subscriptions.list({
    status: "active",
  });

  const EmailsAndPlans = await Promise.all(
    subsList.data.map(async (subs) => {
      const customer = await stripe.customers.retrieve(subs.customer);
      const plan = await stripe.plans.retrieve(subs.items.data[0].plan.id); // Supongo que solo hay un plan por suscripción

      return {
        email: customer.email,
        plan: plan.product, // O plan.name si prefieres
      };
    })
  );

  return EmailsAndPlans;
}

export async function getEmailsFromFB() {
  const q = query(collection(db, "User"));

  const querySnapshot = await getDocs(q);
  const blogData = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  return blogData;
}

export async function UpdateClientsPlans() {
  const SubsEmailsAndPLan = await getSubsEmails();
  const SubsUpdated = SubsEmailsAndPLan.map((user) => {
    const { plan, ...rest } = user;
    if (plan == services[2].ProdId) {
      return { ...rest, plan: "Personal" };
    }

    if (plan == services[3].ProdId) {
      return { ...rest, plan: "Empresas" };
    }
  });

  const fbEmails = await getEmailsFromFB();

  // Encontrar los correos electrónicos en común y no coincidentes
  const commonEmails = [];
  const nonCommonEmails = [];

  SubsUpdated.forEach(user2 => {
    const isCommon = fbEmails.some(user1 => user1.email === user2.email);
    if (isCommon) {
        commonEmails.push(user2);
    }
  });
  
  
  fbEmails.forEach(user2 => {
    const isCommon = SubsUpdated.some(user1 => user1.email === user2.email);
    if (!isCommon) {
      nonCommonEmails.push(user2.email);
    }
  });

  if(commonEmails && commonEmails.length > 0){
    commonEmails.map(async (up)=>{
        setToPremiumsPlans(up)
    })
  }

  if(nonCommonEmails && nonCommonEmails.length > 0){
    nonCommonEmails.map(async (np)=>{
        setToBasicPlan(np)
    })
  }

}

export async function setToPremiumsPlans(user) {
    await userCtrl.UpdatePlanByEmail(user.email,user.plan)
}

export async function setToBasicPlan(email) {
    await userCtrl.UpdatePlanByEmail(email,"Gratis")
}
