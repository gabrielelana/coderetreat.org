import jquery from "jquery/dist/jquery";
import "popper.js/dist/esm/popper";
import "bootstrap/dist/js/bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./search/search.css";
import algoliasearch from "algoliasearch/lite";
import instantsearch from "instantsearch.js";
import { searchBox, hits } from "instantsearch.js/es/widgets";

window.$ = jquery;

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

const searchClient = algoliasearch(
  "QH9SU73U07",
  "11c9a06e6e1dc51a59a858c3e493feff"
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
        <h2>
          {{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}
        </h2>
        <p>{{ description }}</p>
      `,
    },
  }),
]);

search.start();
