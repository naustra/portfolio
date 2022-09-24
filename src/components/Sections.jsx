import React from "react";
export function Sections({}) {
  return (
    <>
      <section className="bg-blue-500">
        <h1>Nice Curves!</h1>
        <p>A website is like a road. The more curves it has the more interesting it is.</p>
        {/* <div class="curve"></div> */}
      </section>

      <section>
        <h1>Nice Curves!</h1>
        <p>A website is like a road. The more curves it has the more interesting it is.</p>
      </section>

      <section class="bubble">
        <h1>Nice Curves!</h1>
        <p>A website is like a road. The more curves it has the more interesting it is.</p>
      </section>

      <section className="bg-dark-500">
        <h1>Nice Curves!</h1>
        <p>A website is like a road. The more curves it has the more interesting it is.</p>
      </section>

      <section className="bg-red-500">
        <h1>Nice Curves!</h1>
        <p>A website is like a road. The more curves it has the more interesting it is.</p>

        <div class="wave">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"></path>
          </svg>
        </div>
      </section>

      <div class="spacer layer1"></div>

      <section>
        <h1>Nice Curves!</h1>
        <p>A website is like a road. The more curves it has the more interesting it is.</p>
      </section>

      <div class="spacer layer2 flip"></div>

      <section class="pink">
        <div class="blob-content">
          <h1>Nice Curves!</h1>
          <p>A website is like a road. The more curves it has the more interesting it is.</p>
        </div>
      </section>
    </>
  );
}
