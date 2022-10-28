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
  console.log(weather.current);
  // console.log(weather.current);
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
            The Dog Pod was formed at the onset of the pandemic. As everything
            shut down and locked down, people formed "pods". A pod consists of a
            small number of people who are committed to limit their direct human
            interactions to each other in order to minimize the risks. The dog
            owners in the neighborhood formed one such pod, and that was the
            start of the Dog Pod.
          </p>
          <br />
          <p>
            Every day at 4pm, the 10 original members gathered for an hour or
            so, initially to let their pups play with each other. Soon many new
            "traditions" have formed. Some started to take turn to bake, others
            started to make cocktails. One of them kept came up with games and
            contests, and everyone participated with ridiculous enthusiasm. As
            their interactions with their families, friends and coworkers were
            limited to virtual meetings, and as the life felt so uncertain and
            unpredictable, having the daily routine with trusted group of people
            proved to be invaluable. And the dogs were the best part! Watching
            them tumbling around the yard at full speed made almost anything
            better.
          </p>
          <br />
          <p>
            A few things have changed as the pandemic started to calm down. As
            we picked up our lives from where we left off before the pandemic,
            we stopped meeting every day. But we also expanded the membership.
            So now we have a larger group of dog owners in the neighborhood who
            gather and party whenever we can find excuses. And we still
            participate in the games and contests as enthusiastically as when
            they initially started.
          </p>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="title">
                <h3>Walk Planner</h3>
                {/* <p>{weather.current.temp}</p> */}
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <img src="http://openweathermap.org/img/wn/${weather.current.weather[0].icon}.png" />
      <p>Temperature: {weather.current.temp} F</p>
      <p>
        Current condition: {weather.current.weather[0].main} -{" "}
        {weather.current.weather[0].description}
      </p> */}
    </>
  );
}
export default Home;
