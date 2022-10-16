import React, { useEffect, useState } from "react";
import topbanner from "./img/topbanner.jpeg";

function Home() {
  const [weather, setWeather] = useState("");

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/onecall?lat=37.84&lon=-122.28&units=imperial&exclude=hourly,minutely&appid=4a661c04b593ee592b01455bccb468d7"
    )
      .then((r) => r.json())
      .then((weather) => setWeather(weather));
  }, []);
  console.log(weather);
  return (
    <>
      <div
        className="page-header page-header-small"
        style={{
          backgroundImage: `url(${topbanner})`,
        }}
      >
        <h1 className="title.text-center">Dog Pod Portal</h1>
      </div>
      <div className="row">
        <div className="col-md-6 ml-auto mr-auto text-center">
          <h3>What is Dog Pod?</h3>
          <p>
            The Dog Pod is a group of dog owners in my neighborhood. We dog sit
            each other's dogs, and have fun dog-themed get-togeters often.
          </p>
          <p>
            One of the things we often do also is to combine our Chewy orders to
            get free shipping. Chewy offers free shipping over $49 worth of
            purchases.
          </p>
          <p>
            Typically we'll be slacking each other, asking if anyone wants to
            add their orders, but I decided to use this scenario for my phase 2
            project.
          </p>
          <p>
            You can add your order to any of the product featured on the page.
            You can filter them by the main ingredient, or search specific
            products. And if the product you want is not shown, you can add it
            by submitting a request.
          </p>
          <p>
            Once the total order goes over $49, Mio will place an order with
            Chewy and will post on the Dog Pod general channel when the package
            arrives!
          </p>
        </div>
      </div>
      <div class="section">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="title">
                <h3>Walk Planner</h3>

                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <img src="{http://openweathermap.org/img/wn/${weather.current.weather[0].icon}.png}" />
                <p>Temperature: {weather.current.temp} F</p>
                <p>
                  Current condition: {weather.current.weather[0].main} -{" "}
                  {weather.current.weather[0].description}
                </p> */}
    </>
  );
}
export default Home;
