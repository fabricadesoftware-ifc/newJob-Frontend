<script setup>
import { useCompaniesStore } from "@/stores";
import { onMounted, ref } from "vue";
import axios from "axios";

const companyStore = useCompaniesStore().currentCompany;
const myLatlng = ref({
  lng: parseFloat(companyStore.longitude),
  lat: parseFloat(companyStore.latitude),
});

((g) => {
  var h,
    a,
    k,
    p = "The Google Maps JavaScript API",
    c = "google",
    l = "importLibrary",
    q = "__ib__",
    m = document,
    b = window;
  b = b[c] || (b[c] = {});
  var d = b.maps || (b.maps = {}),
    r = new Set(),
    e = new URLSearchParams(),
    u = () =>
      h ||
      (h = new Promise(async (f, n) => {
        await (a = m.createElement("script"));
        e.set("libraries", [...r] + "");
        for (k in g)
          e.set(
            k.replace(/[A-Z]/g, (t) => "_" + t[0].toLowerCase()),
            g[k]
          );
        e.set("callback", c + ".maps." + q);
        a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
        d[q] = f;
        a.onerror = () => (h = n(Error(p + " could not load.")));
        a.nonce = m.querySelector("script[nonce]")?.nonce || "";
        m.head.append(a);
      }));
  d[l]
    ? console.warn(p + " only loads once. Ignoring:", g)
    : (d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)));
})({ key: "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg", v: "weekly" });

onMounted(async () => {
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: myLatlng.value,
    mapId: "MAP",
  });

  const marker = ref(
    new AdvancedMarkerElement({
      position: myLatlng.value,
      map: map,
      title: "Localização da Empresa",
    })
  );
});
</script>

<template>
  <div id="map"></div>
  <p>{{ locateText }}</p>
</template>

<style scoped>
#map {
  width: 90%;
  height: 60vh;
  border-radius: 10px;
}
</style>
