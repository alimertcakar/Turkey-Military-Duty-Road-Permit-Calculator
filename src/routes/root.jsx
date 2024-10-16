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
              style: { fill: "red" }, // override the fill color
            });
          }
          return component;
        }}
      />
    </div>
  );
}
