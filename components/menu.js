import { useState, useEffect } from "react";
import RoomAssets from "../pages/api/roomAssets.json";

const Menu = () => {
  console.log("Menu() got called again?");

  const [menuLevel, setMenuLevel] = useState(0);
  const [menuCoords, setMenuCoords] = useState([]);

  const genMenu = () => {
    let curItems = RoomAssets;
    if (menuCoords.length) {
      console.log("menuCoords: " + menuCoords);
      for (let k in menuCoords) {
        curItems = curItems.children[menuCoords[k]];
      }
    }

    return curItems;
  }

  const menuItem = (cat) => {
    let isItem = cat.name.includes(".png");
    let content;
    if (isItem) {
      content = <img src={ cat.path.replace("/images/room", "/images/room thumbs") } width="48" height="48" />;
    } else {
      content = cat.name;
    }
    return  <li className="menuItem btn"
                catid={ curMenuData.children.indexOf(cat) }
                onClick={
                  isItem ? handleItemClick : handleCatClick
                }>
                { content }
            </li>
  }

  const handleUpClick = () => {
    if (menuLevel > 0) {
      setMenuLevel(menuLevel - 1);
      setMenuCoords(menuCoords => [...menuCoords.slice(0, -1)]);
    };
  }

  const handleCatClick = (e) => {
    if (!e.target.innerText.includes(".png")) {
      setMenuLevel(menuLevel + 1);
      const clickedCat = e.target.getAttribute("catid");
      setMenuCoords(menuCoords => [...menuCoords, clickedCat]);
    } else {
      console.log("is a PNG");
    }
  }

  const handleItemClick = (e) => {
    console.log("clicked " + e.target)
    e.target.getAttribute("catid");
  }

  let curMenuData = genMenu();

	return (
		<>
      <div className="menu">
        <div className="menuBorder">
          <div id="lastCatBtn"
            className={ (menuLevel == 0) ? "menuUp btn disabled" : "menuUp btn"}
            onClick={ handleUpClick }>
            <img src="images/menu_arrow_up.png" />
          </div>
          <div className="menuTitle btn">{ curMenuData.name }</div>
          <ul className="itemList">
            {curMenuData.children.map(cat => (
              menuItem(cat)
            ))}
          </ul>
        </div>
      </div>
    </>
	);
};

export default Menu;