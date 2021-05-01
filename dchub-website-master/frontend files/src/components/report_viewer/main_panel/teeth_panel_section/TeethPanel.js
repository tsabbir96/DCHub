import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import t11 from "../../../../assets/teeth/t11.svg";
import t12 from "../../../../assets/teeth/t12.svg";
import t13 from "../../../../assets/teeth/t13.svg";
import t14 from "../../../../assets/teeth/t14.svg";
import t15 from "../../../../assets/teeth/t15.svg";
import t16 from "../../../../assets/teeth/t16.svg";
import t17 from "../../../../assets/teeth/t17.svg";
import t18 from "../../../../assets/teeth/t18.svg";
import t21 from "../../../../assets/teeth/t21.svg";
import t22 from "../../../../assets/teeth/t22.svg";
import t23 from "../../../../assets/teeth/t23.svg";
import t24 from "../../../../assets/teeth/t24.svg";
import t25 from "../../../../assets/teeth/t25.svg";
import t26 from "../../../../assets/teeth/t26.svg";
import t27 from "../../../../assets/teeth/t27.svg";
import t28 from "../../../../assets/teeth/t28.svg";
import t31 from "../../../../assets/teeth/t31.svg";
import t32 from "../../../../assets/teeth/t32.svg";
import t33 from "../../../../assets/teeth/t33.svg";
import t34 from "../../../../assets/teeth/t34.svg";
import t35 from "../../../../assets/teeth/t35.svg";
import t36 from "../../../../assets/teeth/t36.svg";
import t37 from "../../../../assets/teeth/t37.svg";
import t38 from "../../../../assets/teeth/t38.svg";
import t41 from "../../../../assets/teeth/t41.svg";
import t42 from "../../../../assets/teeth/t42.svg";
import t43 from "../../../../assets/teeth/t43.svg";
import t44 from "../../../../assets/teeth/t44.svg";
import t45 from "../../../../assets/teeth/t45.svg";
import t46 from "../../../../assets/teeth/t46.svg";
import t47 from "../../../../assets/teeth/t47.svg";
import t48 from "../../../../assets/teeth/t48.svg";
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    margin: theme.spacing(4),
  },
  toothIcon: {
    fill: theme.palette.text.disabled,
  },
  toothIconFlipped: {
    fill: theme.palette.text.disabled,
    transform: "scaleX(-1)",
  },
  toothDivTop: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100px",
    width: "30px",
    backgroundColor: theme.palette.background.paper,

    justifyContent: "flex-end",
    border: "solid",
    borderColor: "#D0D0D0",
    borderWidth: "1px",
    borderRadius: "6px",
  },
  toothDivTopIssues: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100px",
    width: "30px",
    backdropFilter:
      " invert(14%) sepia(51%) saturate(7411%) hue-rotate(1deg) brightness(106%) contrast(126%)",
    justifyContent: "flex-end",
    border: "solid",
    borderColor: "#D0D0D0",
    borderWidth: "1px",
    borderRadius: "6px",
  },

  toothDivTopVerified: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100px",
    width: "30px",
    backdropFilter:
      "invert(56%) sepia(56%) saturate(5233%) hue-rotate(116deg) brightness(109%) contrast(95%)",
    // backdropFilter:
    //   "invert(10%) sepia(24%) saturate(259%) hue-rotate(80deg) brightness(97%) contrast(87%)",
    justifyContent: "flex-end",
    border: "solid",
    borderColor: "#D0D0D0",
    borderWidth: "1px",
    borderRadius: "6px",
  },

  toothDivBottom: {
    display: "flex",
    backgroundColor: theme.palette.background.paper,

    flexDirection: "column",
    alignItems: "center",
    height: "100px",
    width: "30px",
    justifyContent: "flex-start",
    border: "solid",
    borderColor: "#D0D0D0",
    borderWidth: "1px",
    borderRadius: "6px",
  },
  toothDivBottomIssues: {
    display: "flex",
    backdropFilter:
      " invert(14%) sepia(51%) saturate(7411%) hue-rotate(1deg) brightness(106%) contrast(126%)",
    flexDirection: "column",
    alignItems: "center",
    height: "100px",
    width: "30px",
    justifyContent: "flex-start",
    border: "solid",
    borderColor: "#D0D0D0",
    borderWidth: "1px",
    borderRadius: "6px",
  },
  toothDivBottomVerified: {
    display: "flex",
    backdropFilter:
      "invert(56%) sepia(56%) saturate(5233%) hue-rotate(116deg) brightness(109%) contrast(95%)",
    flexDirection: "column",
    alignItems: "center",
    height: "100px",
    width: "30px",
    justifyContent: "flex-start",
    border: "solid",
    borderColor: "#D0D0D0",
    borderWidth: "1px",
    borderRadius: "6px",
  },
  topRow: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  toothImg: {
    maxHeight: "60px",
  },
}));
const TeethPanel = ({ teeth }) => {
  const classes = useStyles();
  const scrollTo = (index) => {
    document.getElementById(index).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <Grid container justify={"space-around"} className={classes.topRow}>
        {/*//1*/}
        <div
          onClick={() => {
            scrollTo("t1");
          }}
          className={
            teeth["1"].issues > 0
              ? classes.toothDivTopVerified
              : teeth["1"].verified
              ? classes.toothDivTopVerified
              : classes.toothDivTop
          }
        >
          <img
            src={t18}
            alt={"1"}
            loading="lazy"
            className={classes.toothImg}
          />
          <Typography>1</Typography>
        </div>
        {/*//2*/}
        <div
          onClick={() => {
            scrollTo("t2");
          }}
          className={
            teeth["2"].issues > 0
              ? classes.toothDivTopVerified
              : teeth["2"].verified
              ? classes.toothDivTopVerified
              : classes.toothDivTop
          }
        >
          <img
            className={classes.toothImg}
            src={t17}
            loading="lazy"
            alt={"2"}
          />
          <Typography>2</Typography>
        </div>
        {/*//3*/}
        <div
          onClick={() => {
            scrollTo("t3");
          }}
          className={
            teeth["3"].issues > 0
              ? classes.toothDivTopVerified
              : teeth["3"].verified
              ? classes.toothDivTopVerified
              : classes.toothDivTop
          }
        >
          <img
            src={t16}
            alt={"3"}
            loading="lazy"
            className={classes.toothImg}
          />

          <Typography>3</Typography>
        </div>
        {/*//4*/}
        <div
          onClick={() => {
            scrollTo("t4");
          }}
          className={
            teeth["4"].issues > 0
              ? classes.toothDivTopVerified
              : teeth["4"].verified
              ? classes.toothDivTopVerified
              : classes.toothDivTop
          }
        >
          <img
            src={t15}
            alt={"4"}
            loading="lazy"
            className={classes.toothImg}
          />

          <Typography>4</Typography>
        </div>
        {/*//5*/}
        <div
          onClick={() => {
            scrollTo("t5");
          }}
          className={
            teeth["5"].issues > 0
              ? classes.toothDivTopVerified
              : teeth["5"].verified
              ? classes.toothDivTopVerified
              : classes.toothDivTop
          }
        >
          <img
            src={t14}
            alt={"5"}
            loading="lazy"
            className={classes.toothImg}
          />

          <Typography>5</Typography>
        </div>
        {/*//6*/}
        <div
          onClick={() => {
            scrollTo("t6");
          }}
          className={
            teeth["6"].issues > 0
              ? classes.toothDivTopVerified
              : teeth["6"].verified
              ? classes.toothDivTopVerified
              : classes.toothDivTop
          }
        >
          <img
            src={t13}
            className={classes.toothImg}
            loading="lazy"
            alt={"6"}
          />

          <Typography>6</Typography>
        </div>
        {/*//7*/}
        <div
          onClick={() => {
            scrollTo("t7");
          }}
          className={
            teeth["7"].issues > 0
              ? classes.toothDivTopVerified
              : teeth["7"].verified
              ? classes.toothDivTopVerified
              : classes.toothDivTop
          }
        >
          <img
            src={t12}
            alt={"7"}
            loading="lazy"
            className={classes.toothImg}
          />

          <Typography>7</Typography>
        </div>
        {/*//8*/}
        <div
          onClick={() => {
            scrollTo("t8");
          }}
          className={
            teeth["8"].issues > 0
              ? classes.toothDivTopVerified
              : teeth["8"].verified
              ? classes.toothDivTopVerified
              : classes.toothDivTop
          }
        >
          <img
            src={t11}
            alt={"8"}
            loading="lazy"
            className={classes.toothImg}
          />

          <Typography>8</Typography>
        </div>
        {/*//9*/}
        <div
          onClick={() => {
            scrollTo("t9");
          }}
          className={
            teeth["9"].issues > 0
              ? classes.toothDivTopVerified
              : teeth["9"].verified
              ? classes.toothDivTopVerified
              : classes.toothDivTop
          }
        >
          <img
            src={t21}
            alt={"9"}
            loading="lazy"
            className={classes.toothImg}
          />

          <Typography>9</Typography>
        </div>
        {/*//10*/}
        <div
          onClick={() => {
            scrollTo("t10");
          }}
          className={
            teeth["10"].issues > 0
              ? classes.toothDivTopVerified
              : teeth["10"].verified
              ? classes.toothDivTopVerified
              : classes.toothDivTop
          }
        >
          <img
            src={t22}
            loading="lazy"
            className={classes.toothImg}
            alt={"10"}
          />

          <Typography>10</Typography>
        </div>
        {/*//11*/}
        <div
          onClick={() => {
            scrollTo("t11");
          }}
          className={
            teeth["11"].issues > 0
              ? classes.toothDivTopVerified
              : teeth["11"].verified
              ? classes.toothDivTopVerified
              : classes.toothDivTop
          }
        >
          <img
            src={t23}
            loading="lazy"
            className={classes.toothImg}
            alt={"11"}
          />

          <Typography>11</Typography>
        </div>
        {/*//12*/}
        <div
          onClick={() => {
            scrollTo("t12");
          }}
          className={
            teeth["12"].issues > 0
              ? classes.toothDivTopVerified
              : teeth["12"].verified
              ? classes.toothDivTopVerified
              : classes.toothDivTop
          }
        >
          <img
            src={t24}
            loading="lazy"
            className={classes.toothImg}
            alt={"12"}
          />

          <Typography>12</Typography>
        </div>
        {/*//13*/}
        <div
          onClick={() => {
            scrollTo("t13");
          }}
          className={
            teeth["13"].issues > 0
              ? classes.toothDivTopVerified
              : teeth["13"].verified
              ? classes.toothDivTopVerified
              : classes.toothDivTop
          }
        >
          <img
            src={t25}
            loading="lazy"
            className={classes.toothImg}
            alt={"13"}
          />

          <Typography>13</Typography>
        </div>
        {/*//14*/}
        <div
          onClick={() => {
            scrollTo("t14");
          }}
          className={
            teeth["14"].issues > 0
              ? classes.toothDivTopVerified
              : teeth["14"].verified
              ? classes.toothDivTopVerified
              : classes.toothDivTop
          }
        >
          <img
            src={t26}
            loading="lazy"
            className={classes.toothImg}
            alt={"14"}
          />

          <Typography>14</Typography>
        </div>
        {/*//15*/}
        <div
          onClick={() => {
            scrollTo("t15");
          }}
          className={
            teeth["15"].issues > 0
              ? classes.toothDivTopVerified
              : teeth["15"].verified
              ? classes.toothDivTopVerified
              : classes.toothDivTop
          }
        >
          <img
            src={t27}
            loading="lazy"
            className={classes.toothImg}
            alt={"15"}
          />
          <Typography>15</Typography>
        </div>
        {/*//16*/}
        <div
          onClick={() => {
            scrollTo("t16");
          }}
          className={
            teeth["16"].issues > 0
              ? classes.toothDivTopVerified
              : teeth["16"].verified
              ? classes.toothDivTopVerified
              : classes.toothDivTop
          }
        >
          <img
            src={t28}
            loading="lazy"
            className={classes.toothImg}
            alt={"16"}
          />
          <Typography>16</Typography>
        </div>
      </Grid>
      <Grid container justify={"space-around"}>
        {/*//32*/}
        <div
          onClick={() => {
            scrollTo("t32");
          }}
          className={
            teeth["32"].issues > 0
              ? classes.toothDivBottomVerified
              : teeth["32"].verified
              ? classes.toothDivBottomVerified
              : classes.toothDivBottom
          }
        >
          <Typography>32</Typography>

          <img
            src={t48}
            loading="lazy"
            className={classes.toothImg}
            alt={"32"}
          />
        </div>
        {/*//31*/}
        <div
          onClick={() => {
            scrollTo("t31");
          }}
          className={
            teeth["31"].issues > 0
              ? classes.toothDivBottomVerified
              : teeth["31"].verified
              ? classes.toothDivBottomVerified
              : classes.toothDivBottom
          }
        >
          <Typography>31</Typography>

          <img
            src={t47}
            loading="lazy"
            className={classes.toothImg}
            alt={"31"}
          />
        </div>
        {/*//30*/}
        <div
          onClick={() => {
            scrollTo("t30");
          }}
          className={
            teeth["30"].issues > 0
              ? classes.toothDivBottomVerified
              : teeth["30"].verified
              ? classes.toothDivBottomVerified
              : classes.toothDivBottom
          }
        >
          <Typography>30</Typography>

          <img
            src={t46}
            loading="lazy"
            className={classes.toothImg}
            alt={"30"}
          />
        </div>
        {/*//29*/}
        <div
          onClick={() => {
            scrollTo("t29");
          }}
          className={
            teeth["29"].issues > 0
              ? classes.toothDivBottomVerified
              : teeth["29"].verified
              ? classes.toothDivBottomVerified
              : classes.toothDivBottom
          }
        >
          <Typography>29</Typography>

          <img
            src={t45}
            loading="lazy"
            className={classes.toothImg}
            alt={"29"}
          />
        </div>
        {/*//28*/}
        <div
          onClick={() => {
            scrollTo("t28");
          }}
          className={
            teeth["28"].issues > 0
              ? classes.toothDivBottomVerified
              : teeth["28"].verified
              ? classes.toothDivBottomVerified
              : classes.toothDivBottom
          }
        >
          <Typography>28</Typography>
          <img
            src={t44}
            loading="lazy"
            className={classes.toothImg}
            alt={"28"}
          />
        </div>
        {/*//27*/}
        <div
          onClick={() => {
            scrollTo("t27");
          }}
          className={
            teeth["27"].issues > 0
              ? classes.toothDivBottomVerified
              : teeth["27"].verified
              ? classes.toothDivBottomVerified
              : classes.toothDivBottom
          }
        >
          <Typography>27</Typography>

          <img
            src={t43}
            loading="lazy"
            className={classes.toothImg}
            alt={"27"}
          />
        </div>
        {/*//26*/}
        <div
          onClick={() => {
            scrollTo("t26");
          }}
          className={
            teeth["26"].issues > 0
              ? classes.toothDivBottomVerified
              : teeth["26"].verified
              ? classes.toothDivBottomVerified
              : classes.toothDivBottom
          }
        >
          <Typography>26</Typography>

          <img
            src={t42}
            loading="lazy"
            className={classes.toothImg}
            alt={"26"}
          />
        </div>
        {/*//25*/}
        <div
          onClick={() => {
            scrollTo("t25");
          }}
          className={
            teeth["25"].issues > 0
              ? classes.toothDivBottomVerified
              : teeth["25"].verified
              ? classes.toothDivBottomVerified
              : classes.toothDivBottom
          }
        >
          <Typography>25</Typography>

          <img
            src={t41}
            loading="lazy"
            className={classes.toothImg}
            alt={"25"}
          />
        </div>
        {/*//24*/}
        <div
          onClick={() => {
            scrollTo("t24");
          }}
          className={
            teeth["24"].issues > 0
              ? classes.toothDivBottomVerified
              : teeth["24"].verified
              ? classes.toothDivBottomVerified
              : classes.toothDivBottom
          }
        >
          <Typography>24</Typography>
          <img
            src={t31}
            loading="lazy"
            className={classes.toothImg}
            alt={"24"}
          />
        </div>
        {/*//23*/}
        <div
          onClick={() => {
            scrollTo("t23");
          }}
          className={
            teeth["23"].issues > 0
              ? classes.toothDivBottomVerified
              : teeth["23"].verified
              ? classes.toothDivBottomVerified
              : classes.toothDivBottom
          }
        >
          <Typography>23</Typography>

          <img
            src={t32}
            loading="lazy"
            className={classes.toothImg}
            alt={"23"}
          />
        </div>
        {/*//22*/}
        <div
          onClick={() => {
            scrollTo("t22");
          }}
          className={
            teeth["22"].issues > 0
              ? classes.toothDivBottomVerified
              : teeth["22"].verified
              ? classes.toothDivBottomVerified
              : classes.toothDivBottom
          }
        >
          <Typography>22</Typography>

          <img
            src={t33}
            loading="lazy"
            className={classes.toothImg}
            alt={"22"}
          />
        </div>
        {/*//21*/}
        <div
          onClick={() => {
            scrollTo("t21");
          }}
          className={
            teeth["21"].issues > 0
              ? classes.toothDivBottomVerified
              : teeth["21"].verified
              ? classes.toothDivBottomVerified
              : classes.toothDivBottom
          }
        >
          <Typography>21</Typography>

          <img
            src={t34}
            loading="lazy"
            className={classes.toothImg}
            alt={"21"}
          />
        </div>
        {/*//20*/}
        <div
          onClick={() => {
            scrollTo("t20");
          }}
          className={
            teeth["20"].issues > 0
              ? classes.toothDivBottomVerified
              : teeth["20"].verified
              ? classes.toothDivBottomVerified
              : classes.toothDivBottom
          }
        >
          <Typography>20</Typography>

          <img
            src={t35}
            loading="lazy"
            className={classes.toothImg}
            alt={"20"}
          />
        </div>
        {/*//19*/}
        <div
          onClick={() => {
            scrollTo("t19");
          }}
          className={
            teeth["19"].issues > 0
              ? classes.toothDivBottomVerified
              : teeth["19"].verified
              ? classes.toothDivBottomVerified
              : classes.toothDivBottom
          }
        >
          <Typography>19</Typography>

          <img
            src={t36}
            loading="lazy"
            className={classes.toothImg}
            alt={"19"}
          />
        </div>
        {/*//18*/}
        <div
          onClick={() => {
            scrollTo("t18");
          }}
          className={
            teeth["18"].issues > 0
              ? classes.toothDivBottomVerified
              : teeth["18"].verified
              ? classes.toothDivBottomVerified
              : classes.toothDivBottom
          }
        >
          <Typography>18</Typography>

          <img
            src={t37}
            loading="lazy"
            className={classes.toothImg}
            alt={"18"}
          />
        </div>
        {/*//17*/}
        <div
          onClick={() => {
            scrollTo("t17");
          }}
          className={
            teeth["17"].issues > 0
              ? classes.toothDivBottomVerified
              : teeth["17"].verified
              ? classes.toothDivBottomVerified
              : classes.toothDivBottom
          }
        >
          <Typography>17</Typography>

          <img
            src={t38}
            loading="lazy"
            className={classes.toothImg}
            alt={"17"}
          />
        </div>
      </Grid>
    </div>
  );
};
export default TeethPanel;
