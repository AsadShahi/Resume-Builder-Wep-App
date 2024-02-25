import { useSuspense } from "react";
import { useRoutes } from "react-router-dom";

import {TranslationProvider} from './MainPageWeb/components/Locales/TranslationContext';
import routes from "./routes";
import "./resume.css";

export default function App() {
  let Router = useRoutes(routes);
  return (
    
      <TranslationProvider>
        
      {Router}

      </TranslationProvider>
    
  );
}
