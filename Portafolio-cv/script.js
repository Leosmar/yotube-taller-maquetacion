/* MENU */
((d) => {
  const $menu = d.querySelector(".menu");
  const $menuBtn = d.querySelector(".menu-btn");
  $menuBtn.addEventListener("click", (e) => {
    $menuBtn.firstElementChild.classList.toggle("none");
    $menuBtn.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });
  d.addEventListener("click", (e) => {
    if (e.target.matches(".menu > a")) {
      $menuBtn.firstElementChild.classList.remove("none");
      $menuBtn.lastElementChild.classList.add("none");
      $menu.classList.remove("is-active");
    }
  });
  /*  d.addEventListener("click", (e) => {
    if (e.target.matches(".menu-btn, .menu-btn svg, .menu-btn svg path")) {
      const $menu = d.querySelector(".menu");
      console.log($menu);
      const $btnDesactive = d.querySelector(".menu-btn").children[0];
      const $btnActive = d.querySelector(".menu-btn").children[1];

      $btnActive.classList.toggle("none");
      $btnDesactive.classList.toggle("none");
      $menu.classList.toggle("is-active");
    }
  }); */
})(document);

/* Formulario */
((d) => {
  const $form = d.querySelector(".contact-form");
  const $loader = d.querySelector(".contact-form-loader");
  const $response = d.querySelector(".contact-form-response");

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    $loader.classList.remove("none");
    fetch("https://frmsubmit.co/ajax/zoidpvp@gmail.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json);
        location.hash = "#gracias";
      })
      .catch((err) => {
        console.log(err);
        let message =
          err.statusText || "Ocurrio un error al enviar intenta nuevamente";
        location.hash = "#gracias";

        $response.innerHTML = `Error ${err.status} ${message}`;
      })
      .finally(() => {
        $loader.classList.add("none");
        setTimeout(() => {
          location.hash = "#contacto";
        }, 3000);
        $form.reset();
      });
  });
})(document);
