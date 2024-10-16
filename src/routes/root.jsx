import * as React from "react";
import TurkeyMap from "turkey-map-react";

export default function Root() {
  return (
    <div className="homepage">
      <div className="select">
        <select>
          <option>Select city</option>
        </select>
      </div>
      init
      <TurkeyMap
        cityWrapper={(component, city) => {
          if (city.plateNumber === 7) {
            return React.cloneElement(component, {
              children: React.Children.map(
                component.props.children,
                (child) => {
                  if (child.type === "path") {
                    return React.cloneElement(child, {
                      fill: "red!important",
                    });
                  }
                  return child;
                }
              ),
            });
          }
          return component;
        }}
      />
    </div>
  );
}
