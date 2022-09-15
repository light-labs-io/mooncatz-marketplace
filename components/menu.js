import { useState, useEffect } from "react";
import RoomAssets from "../pages/api/roomAssetsFullScrubbed.json";

const Menu = () => {
  // TODO: Hook up tooltip for button hovers
  console.log("Menu() got called again?");

  const [menuCoords, setMenuCoords] = useState([]);
  // make current menu category JSON a state?
  let curDir = RoomAssets;

  // lame.
  const curSlot = "";
  const curCatID = 0;

  const genMenu = () => {
    let curItems = RoomAssets;
    if (menuCoords.length) {
      console.log("menuCoords: " + menuCoords);
      for (let k in menuCoords) {
        curItems = curItems.children[menuCoords[k]];
        // curSlot not super dependable solution. get some sleep and refactor
        if (curItems.slot) {
          curSlot = curItems.slot;
        }
      }
    }
    return curItems;
  }

  const getItemData = (coords, i) => {
    let curItems = RoomAssets;
    if (coords.length) {
      for (let k in coords) {
        curItems = curItems.children[coords[k]];
      }
    }
    return curItems.children[i];

  }

  const menuItem = (cat) => {
    let isItem = cat.name.includes(".png");
    let content;
    if (isItem) {
      content = <img src={ cat.thumb } width="120" height="120" />;
    } else {
      content = cat.name;
    }
    return  <li className={ isItem ? "menuItem btn isItem" : "menuItem btn" }
              catid={ curMenuData.children.indexOf(cat) }
              slotname={ cat.slot }
              onClick={
                isItem ? handleItemClick : handleCatClick
            }>
              { content }
            </li>
  }

  const handleUpClick = (e) => {
    if (menuCoords.length) {
      setMenuCoords(menuCoords => [...menuCoords.slice(0, -1)]);
    };
  }

  const handleCatClick = (e) => {
    const clickedCat = e.currentTarget.getAttribute("catid");
    setMenuCoords(menuCoords => [...menuCoords, clickedCat]);
  }

  const handleItemClick = (e) => {
    curCatID = e.currentTarget.getAttribute("catid");
    const itemData = getItemData(menuCoords, curCatID);
    console.log(curSlot + " / " + curCatID);
    document.getElementById(curSlot).src = itemData.path;
  }

  const handleRotateClick = (e) => {
    console.log("rotate!:" + menuCoords);
    const itemData = getItemData(menuCoords, curCatID);
    console.log(curSlot + " / " + curCatID);
    console.log(itemData.reverse);
    document.getElementById(curSlot).src = itemData.reverse;
  }

  const flipBed = () => {
    
  }

  let curMenuData = genMenu();

	return (
		<>
      <div className="menu">
        <div className="menuBorder">
          <div id="lastCatBtn"
            className={ (menuCoords.length) ? "menuUp btn" : "menuUp btn disabled" }
            onClick={ handleUpClick }>
            <div className="icon"></div>
          </div>
          <div className="menuTitle btn">{ curMenuData.name }</div>
          <ul className="itemList">
            {curMenuData.children.map(cat => (
              menuItem(cat)
            ))}
          </ul>
          <hr />
          <div id="rotateBtn"
            className={ (curSlot == "bedFrame") ? "rotBtn btn tooltip" : "rotBtn btn tooltip disabled" }
            onClick={ handleRotateClick }>
              <div className="icon"></div>
          </div>
        </div>
      </div>
    </>
	);
};

export default Menu;