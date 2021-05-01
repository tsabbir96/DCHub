import { makeStyles } from "@material-ui/core";
import React, { lazy, Suspense } from "react";
import Features from "../features/Features";
import ScreenOne from "./ScreenOne";
 const Steps = lazy(() => import("./Steps"));
const DrAllenTalk = lazy(() => import("./DrAllenTalk"));
 const Help02 = lazy(() => import("./Help02"));
const Pricing = lazy(() => import("../pricing/Pricing"));

const useStyles = makeStyles((theme) => ({
  root: {},
}));
export default function HomeIntro() {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <ScreenOne />

        {/* <Features /> */}

        {/* <FounderMessage /> */}

        {/* <DchubVsOthers /> */}
        <Suspense fallback={<h4>Loading...</h4>}>
          <Help02 />
        </Suspense>
        <Suspense fallback={<h4>Loading...</h4>}>
          <Steps />
        </Suspense>

        <Suspense fallback={<h4>Loading...</h4>}>
          <Features />
          {/* <FeatureList /> */}
        </Suspense>

        <Suspense fallback={<h4>Loading...</h4>}>
          <DrAllenTalk />
        </Suspense>

        <Suspense fallback={<h4>Loading...</h4>}>
          <Pricing />
        </Suspense>

        {/* <Suspense fallback={<h4>Loading...</h4>}>
     
        <OurTeam />
      </Suspense>

      <Suspense fallback={<h4>Loading...</h4>}>
 
        <Testimonials />
      </Suspense>

      <Suspense fallback={<h4>Loading...</h4>}>
     
        <ContactUs02 />
      </Suspense> */}

        {/* <PaymentLayout /> */}
        {/* <DrAllenTalk /> */}
      </div>
  );
}
