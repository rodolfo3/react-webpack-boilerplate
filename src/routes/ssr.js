import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import hbs from "handlebars";

import { createRoutes, match, RouterContext } from 'react-router';

import routesDef from '../components/routes';
const routes = createRoutes(routesDef);

const router = express.Router();


const theHtml = `<html>
<head><title>My First SSR</title></head>
<body>
<h1>My First Server Side Render</h1>
<div id="reactele">{{{reactele}}}</div>
<script src="/app.js" charset="utf-8"></script>
<script src="/vendor.js" charset="utf-8"></script>
</body>
</html>`;


const hbsTemplate = hbs.compile(theHtml);


router.get("*", async (req, res) => {
  console.log('>>', req.url);

  const location = req.url;

  console.log({ router, location });

  match(
    { routes, location },
    (err, redirectLocation, renderProps) => {
      if (redirectLocation) {
        throw new Error('err 1');
      }

      if (!renderProps) {
        throw new Error('err 2');
      }

      const reactComp = renderToString(
        <RouterContext
          createElement={(Component, props) => <Component {...props} />}
          {...renderProps}
        />
      );

      const htmlToSend = hbsTemplate({ reactele: reactComp });
      res.send(htmlToSend);
    }
  );
});

export default router;
