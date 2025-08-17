import { Component } from "react";
import Header from "./components/Header/Header";
import MenuItem from "./components/MenuItem/MenuItem";
import menu from "./commonResource/data";

console.log(menu);
export default class App extends Component {
  render() {
    return (
      <div>
        <>
          <Header />
          <div className="foods-container">
            {menu.map((item) => (
              <MenuItem
                key={item.id}
                title={item.title}
                price={item.price}
                img={item.img}
                desc={item.desc}
              />
            ))}
          </div>
        </>
      </div>
    );
  }
}
