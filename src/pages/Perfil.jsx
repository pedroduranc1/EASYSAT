import React from "react";
import { MainLayout } from "../layouts/MainLayout";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useAuth } from "../hooks/useAuth";

const data = [
  {
    label: "Perfil",
    value: "html",
    desc: `It really matters and then like it really doesn't matter.
    What matters is the people who are sparked by it. And the people 
    who are like offended by it, it doesn't matter.`,
  },
  {
    label: "Configuracion",
    value: "react",
    desc: `Because it's about motivating the doers. Because I'm here
    to follow my dreams and inspire other people to follow their dreams, too.`,
  },
];

export const Perfil = () => {

  const {User}= useAuth()
  if(!User) return window.location.href = "/login"
  return (
    <MainLayout>
      <div className="w-full flex flex-col  flex-1 h-screen px-2 md:px-[2%]">
        <h1 className="my-5 text-2xl font-bold">Perfil</h1>
        <Tabs value="html">
          <TabsHeader>
            {data.map(({ label, value }) => (
              <Tab className="font-bold" key={value} value={value}>
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody >
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </MainLayout>
  );
};
