import { Box, Divider, makeStyles, Typography } from "@material-ui/core";
import MaterialTable from "material-table";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: "284mm",
    height: "284mm",
  },

  marginTop: {
    marginTop: theme.spacing(8),
  },
  nameCard: {
    borderColor: theme.palette.primary.main,
    backgroundColor: "#FAF9F5",
    margin: theme.spacing(1),
  },
  gridItem: {
    padding: theme.spacing(1),
  },
  infoCard: {
    borderColor: theme.palette.primary.main,
    margin: theme.spacing(1),
    width: "100%",
  },
  infoItem: {
    padding: theme.spacing(1),
  },
  titleStyle: {
    padding: theme.spacing(1),
    backgroundColor:theme.palette.primary.main,
    color:'white'
  },
}));

const fillData = (quadrantsImg, quadrantsXray) => {
  var h;
  const data = {
    xrayTeeth: [],
    imagesTeeth: [],
    summ: [],
  };

  quadrantsImg.forEach((item) => {
    switch (item.quadrant_info_name.toLowerCase()) {
      case "urq":
        data.imagesTeeth = item.teeth_array.sort(
          (a, b) => Number(a.tooth_name) - Number(b.tooth_name)
        );
         break;

      default:
        break;
    }
  });
  quadrantsXray.forEach((item) => {
    switch (item.quadrant_info_name.toLowerCase()) {
      case "urq":
        data.xrayTeeth = item.teeth_array.sort(
          (a, b) => Number(a.tooth_name) - Number(b.tooth_name)
        );
         break;

      default:
        break;
    }
  });

  for (h = 0; h < data.xrayTeeth.length; h++) {
    data.summ.push({
      tooth_nbr: data.xrayTeeth[h].tooth_name,
      visual:
        data.imagesTeeth[h].findings.length === 0
          ? "-"
          : data.imagesTeeth[h].findings,
      radio:
        data.xrayTeeth[h].findings.length === 0
          ? "-"
          : data.xrayTeeth[h].findings,
      solution:
        data.imagesTeeth[h].solutions.length === 0 &&
        data.xrayTeeth[h].solutions.length === 0
          ? "-"
          : data.imagesTeeth[h].solutions + " " + data.xrayTeeth[h].solutions,
    });
  }

  return data.summ;
};
export default function Page05Table01({ fullInfo }) {
  const [columns, setColumns] = React.useState([
    { title: "Tooth nbr", field: "tooth_nbr" },
    { title: "Visual Findings", field: "visual" },
    {
      title: "Radiographic Findings",
      field: "radio" 
      
    },
    {
      title: "Ideal Solution",
      field: "solution",
    },
  ]);
  const [data, setData] = React.useState(
    fillData(
      fullInfo.mouth_images.report.quadrants,
      fullInfo.xray.report.quadrants
    )
  );
  const classes = useStyles();
  const bull = <span>•</span>;
  return (
    <div className={classes.root}>
      <Typography variant="h5" className={classes.titleStyle} color="primary">
      <Box fontWeight="800"> X. Findings </Box>
      </Typography>
      <Divider/>

      <MaterialTable
        title="UPPER RIGHT QUADRANT (universal numbering system)"
        options={{
          search: false,
          paging: false,
        }}
        columns={columns}
        data={data}
      />
    </div>
  );
}
