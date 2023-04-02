import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import Logo from '../../assets/hanger.png';
import './navigation.styles.scss';


const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">

        <Link className="logo-container" to="/">
          <div className="logo"><img src={Logo} alt="logo" /></div>
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="shop">
            {" "}
            Shop{" "}
          </Link>
        </div>

      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
