import * as React from 'react';
export default function List(props) {
  return (
    <div>
      <h1>List</h1>
      <div className="grid">
        <div className="list">
          <strong>category1</strong>
          {props.li.map((ele) => {
            var cat = ele['category'];
            if (cat === 1) {
              return (
                <Element
                  id={ele.id}
                  move={props.move}
                  category={ele.category}
                  text={ele.text}
                />
              );
            } else {
              return;
            }
          })}
        </div>
        <div className="list">
          <strong>category2</strong>
          {props.li.map((ele) => {
            var cat = ele['category'];
            if (cat === 2) {
              return (
                <Element
                  id={ele.id}
                  move={props.move}
                  category={ele.category}
                  text={ele.text}
                />
              );
            } else {
              return;
            }
          })}
        </div>
        <div className="list">
          <strong>category3</strong>
          {props.li.map((ele) => {
            var cat = ele['category'];
            if (cat === 3) {
              return (
                <Element
                  id={ele.id}
                  move={props.move}
                  category={ele.category}
                  text={ele.text}
                />
              );
            } else {
              return;
            }
          })}
        </div>
        <div className="list">
          <strong>category4</strong>
          {props.li.map((ele) => {
            var cat = ele['category'];
            if (cat === 4) {
              return (
                <Element
                  id={ele.id}
                  move={props.move}
                  category={ele.category}
                  text={ele.text}
                />
              );
            } else {
              return;
            }
          })}
        </div>
      </div>
    </div>
  );
}

function Element(props) {
  function movel() {
    props.move(0, props.id);
  }
  function mover() {
    props.move(1, props.id);
  }

  return (
    <div>
      {props.category != 1 ? <button onClick={movel}>l</button> : ''}
      {props.text}
      {props.category != 4 ? <button onClick={mover}>r</button> : ''}
    </div>
  );
}
