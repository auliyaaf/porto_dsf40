<script>
  const lightbox = document.getElementById("lightbox"); const lightboxImg =
  lightbox.querySelector("img"); document.querySelectorAll(".project-item
  img").forEach((img) ={" "}
  {img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.style.display = "flex";
  })}
  ); lightbox.addEventListener("click", () = {(lightbox.style.display = "none")}
  );\
</script>;
