import jquery from "jquery/dist/jquery";
import "popper.js/dist/esm/popper";
import "bootstrap/dist/js/bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./search/search.css";
import algoliasearch from "algoliasearch/lite";
import instantsearch from "instantsearch.js";
import { searchBox, hits } from "instantsearch.js/es/widgets";
import 'instantsearch.css/themes/reset.css';

window.$ = jquery;

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

const searchClient = algoliasearch(
  "8Q16J1ZDG3",
  "fc3522aed0fd32587e77332814c3ecb2"
);

const search = instantsearch({
  indexName: "CODERETREAT",
  searchClient,
});

search.addWidgets([
  searchBox({
    container: "#searchbox",
  }),
  hits({
    container: "#hits",
    cssClasses: {
      emptyRoot: "hits--empty",
    },

    templates: {
      item: `
      <a href="{{ url }}">
        <p><strong>{{#helpers.highlight}}{ "attribute": "title" }{{/helpers.highlight}}</strong></p>
        <p>{{ description }}</p></a>
      `,
    },
  }),
]);

search.start();
