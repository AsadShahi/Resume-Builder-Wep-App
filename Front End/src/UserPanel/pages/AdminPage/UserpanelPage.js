import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useRoutes } from "react-router-dom";
import routesAdmin from "../../routes";
import { makeStyles } from "@material-ui/core/styles";
import { Hidden, Drawer, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import TopBar from "../../componetns/topBar/TopBar";
import Sidebar from "../../componetns/sideBar/SideBar";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    marginTop:'20px',
  },
  content: {
    flexGrow: 1,
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: 300,
      flexShrink: 0,
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  drawerPaper: {
    width: 300,
  },
  toggleButton: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function UserpanelPage() {
  const classes = useStyles();
  const [showSidebar, setShowSidebar] = useState(false);
  const isMobile = window.innerWidth <= 968;

  let Routers = useRoutes(routesAdmin);

  const handleSidebarToggle = () => {
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const handleWindowResize = () => {
    if (window.innerWidth <= 968) {
      setShowSidebar(false);
    }
  };

  return (
    <>
      <TopBar />
      <div  className={classes.container} >
        <nav className={classes.drawer}>
          <Hidden mdUp implementation="css">
            <Drawer
              variant="temporary"
              anchor="left"
              open={showSidebar}
              onClose={handleSidebarToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <Sidebar />
            </Drawer>
          </Hidden>

          <Hidden smDown implementation="css">
            <Drawer
              variant="permanent"
              open
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <Sidebar />
            </Drawer>
          </Hidden>


        </nav>
        <div className={classes.content}>
          <Button
            variant="contained"
            color="primary"
            className={classes.toggleButton}
            onClick={handleSidebarToggle}
          >
            <MenuIcon />
            
          </Button>
          {Routers}
        </div>
      </div>
    </>
  );
}





















// import React, { useEffect, useState } from "react";
// import { Row, Col } from "react-bootstrap";
// import { useRoutes } from "react-router-dom";
// import routesAdmin from "../../routes";
// import "./userPanelPage.css";
// import TopBar from "../../componetns/topBar/TopBar";
// import Sidebar from "../../componetns/sideBar/SideBar";

// export default function UserpanelPage() {
//   let Routers = useRoutes(routesAdmin);
//   return (
//     <>
//       <TopBar />
//       <div
//         className="container-fluid userPanelDash"
//         style={{ dispaly: "flex" }}
//       >
//         <Row md={2} sm={1} lg={2} style={{width:'100%', display:'flex'}}>
          
//             <Col style={{width:'30%'}}>
          
//               <Sidebar />
      
//             </Col>

//             <Col style={{ display:'flex',alignItems:'center' ,justifyContent:'center'}}  >
       
//             {Routers}
       
//             </Col>

//         </Row>
//       </div>
//     </>
//   );
// }
