import React,  {useState, useEffect} from 'react';
import './App.css';
import Room from './Room';

import Hotkeys from 'react-hot-keys';


function App() {
  const isEmpty = " ";
  const hasPerson = "@";
  const theEnd = "X"
  const path = "#"

  
  const [gameMap, setGameMap] = useState([[]]);
  const [actualPositionOfPersonX, setActualPositionOfPersonX] = useState(0);
  const [actualPositionOfPersonY, setActualPositionOfPersonY] = useState(0);
  const [gameMapWidth, setGameMapWidth] = useState(undefined);
  const [gameMapHeight, setGameMapHeight] = useState(undefined);
  const [positionOfEndX, setPositionOfEndX] = useState(null);
  const [positionOfEndY, setPositionOfEndY] = useState(null);
  let napisKonec = " ";



//   const gamePlanInString = `@########  #
//       #    #
// ######### ##
// ##   #     #
// ##   ###X###`;
  const gamePlanInString =`#@# #####  X
# # #   #  #
###  #######
# ####   #  `

//  const gamePlanInString = `####
//@# X`;

//   const gamePlanInString = `#
// @`;

const getContentInGameMap = (whereX, whereY) => {
   let ret = isEmpty;
    gameMap.map((rowItem, rowIndex) => {
      rowItem.map((cellItem, cellIndex) => {
        if (whereX === cellIndex && whereY === rowIndex){
          ret = cellItem;
        }
      });
    });

    return ret;
  }

  useEffect(() => {
    let tempGameMap = gamePlanInString.split("\n");
    tempGameMap = tempGameMap.map(rowItem => {
      return rowItem.split("");
    });
//    console.log("final tempGameMap", tempGameMap);
    setGameMap(tempGameMap);
    findPositionOfPersonInGameMapAndSetToState(tempGameMap);

    let tempHeight = 0;
    let tempWidth = 0;
    setGameMapWidth(tempGameMap[0].length);
    setGameMapHeight(tempGameMap.length);
    findpostionOfEnd(tempGameMap);

  }, []);

//  console.log(gamePlanInString);

  const findPositionOfPersonInGameMapAndSetToState = (gameMap) => {
    gameMap.map((rowItem, rowIndex) => {
      rowItem.map((cellItem, cellIndex) => {
        if(cellItem === "@") {
          setActualPositionOfPersonX(cellIndex);
          setActualPositionOfPersonY(rowIndex);
        }
      });
    });
  }


  const findpostionOfEnd = (gameMap) => {
    gameMap.map((rowItem, rowIndex) => {
      rowItem.map((cellItem, cellIndex) => {
        if(cellItem === "X") {
          setPositionOfEndX(cellIndex);
          setPositionOfEndY(rowIndex);
          console.log("Tu!!!!!!!!!!!!!!!!!")
        }
      });
    });
  }

  if (positionOfEndX === actualPositionOfPersonX && positionOfEndY === actualPositionOfPersonY){
//    console.log("Je to tam!!!!!!!!!!")
    napisKonec = "Game Over"
  }


  const handleMovePerson = (rowIndexToChecked, cellIndexToChecked, cellItem) => {
    if(!isAllowedMove(rowIndexToChecked, cellIndexToChecked, cellItem)) {return;}

    setActualPositionOfPersonX(cellIndexToChecked);
    setActualPositionOfPersonY(rowIndexToChecked);
    const newGameMap = gameMap.map((rowItem, rowIndex) => (
      rowItem.map((cellItem, cellIndex) => {
        if(rowIndexToChecked === rowIndex && cellIndexToChecked === cellIndex) {
          return hasPerson;

          } else if (cellItem === "@") {return "#"} 
          else  {return cellItem} 
      })
    ));
   setGameMap(newGameMap);

  }

  const handleMoveUp = (e) => {
    handleMovePerson(actualPositionOfPersonY - 1, actualPositionOfPersonX, getContentInGameMap(actualPositionOfPersonX, actualPositionOfPersonY - 1));
  }
  const handleMoveDown = (e) => {
    handleMovePerson(actualPositionOfPersonY + 1, actualPositionOfPersonX, getContentInGameMap(actualPositionOfPersonX, actualPositionOfPersonY + 1));
  }
  const handleMoveRight = (e) => {
    handleMovePerson(actualPositionOfPersonY, actualPositionOfPersonX + 1, getContentInGameMap(actualPositionOfPersonX + 1, actualPositionOfPersonY));
  }
  const handleMoveLeft = (e) => {
    handleMovePerson(actualPositionOfPersonY, actualPositionOfPersonX - 1, getContentInGameMap(actualPositionOfPersonX - 1, actualPositionOfPersonY));
  }

  const isAllowedMove = (rowIndexToChecked, cellIndexToChecked, cellItem) => {

    return (
      isAcceptedDirectToMove(rowIndexToChecked, cellIndexToChecked)
      && (
        cellItem === "#" || cellItem === "X"
        )
      );
  }

  const isAcceptedDirectToMove = (rowIndexToChecked, cellIndexToChecked) => {

    return (
    (
        ( actualPositionOfPersonX - 1 === cellIndexToChecked || actualPositionOfPersonX + 1 === cellIndexToChecked )
        && ( actualPositionOfPersonY === rowIndexToChecked )
      )
      || (
        ( actualPositionOfPersonY - 1 === rowIndexToChecked || actualPositionOfPersonY + 1 === rowIndexToChecked )
        && ( actualPositionOfPersonX === cellIndexToChecked )
        )
  
      )

  }

/*
const isAcceptedToMoveWithArrow = (rowIndexToChecked, cellIndexToChecked, rowIndex, arrowUp, cellItem) => {


    return (setActualPositionOfPersonY(rowIndex + 1)) (
        (rowIndex >= 0
        && (cellItem === "#" || cellItem === "@" || cellItem === "X"))
      )
  }
  //return (<div>aaaaa</div>)
*/
  return (
    <div className="App">
      <Hotkeys keyName="up,w" onKeyDown={handleMoveUp} />
      <Hotkeys keyName="down,s" onKeyDown={handleMoveDown} />
      <Hotkeys keyName="right,d" onKeyDown={handleMoveRight} />
      <Hotkeys keyName="left,a" onKeyDown={handleMoveLeft} />

{/*
      <p>panacek je na pozici x={actualPositionOfPersonX}, y={actualPositionOfPersonY}</p>
*/}

      <p>{napisKonec}</p>
        

{/*
        <table>
          <tbody>
            {gameMap.map((rowItem, rowIndex) => (<tr key={rowIndex}>
              {rowItem.map((cellItem, cellIndex) => (
                <td
                  key={cellIndex}
                  onClick={e=>handleMovePerson(rowIndex, cellIndex, cellItem)}
                >
                  <Room
                    roomItem={{
                      content: cellItem,
                      positionX: cellIndex,
                      positionY: rowIndex,
                    }}
                    {...{gameMap, gameMapWidth, gameMapHeight}}
                  />
                </td>
              ))}
            </tr>
            ))}
          </tbody>
        </table>
*/}

            {gameMap.map((rowItem, rowIndex) => (<div key={rowIndex}>
              {rowItem.map((cellItem, cellIndex) => (
                (actualPositionOfPersonX === cellIndex && actualPositionOfPersonY === rowIndex)
                ? 
                  <Room
                    key={cellIndex}
                    roomItem={{
                      content: cellItem,
                      positionX: cellIndex,
                      positionY: rowIndex,
                    }}
                    {...{gameMap, gameMapWidth, gameMapHeight}}
                  />
  
                : <></>
              ))}
              </div>
            ))}

            <p><a href="https://teo.jacon.cz/">zpet na uvodni stranku</a></p>

    </div>
  );
}


export default App;
