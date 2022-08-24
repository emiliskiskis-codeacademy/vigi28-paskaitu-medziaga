export function addHeader(app) {
  app.innerHTML += `
<header style="height: 60px; box-shadow: 0 0 8px 0">
  <div style="display: flex; height:100%; margin:0 15px; justify-content:space-between">
    <div>
      <img style="height:100%" src="https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png">
    </div>
    <div>
      <a href="https://www.google.com/" rel="noreferrer noopener">Google</a>
    </div>
  </div>
</header>
  `;

  // lvalue: pakeičiama savybė | rvalue - bet kokia reikšmė
  let a = 2;
  a -= 5; // a === -3;
}
