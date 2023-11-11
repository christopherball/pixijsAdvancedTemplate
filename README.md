# pixijsAdvancedTemplate

Provides a more complex pixi.js (with webpack) setup with full autocomplete support, multipage configurations, including _development_ and _production_ CI support.

## Usage

- `npm install` Installs node_modules included in package.json.
- `npm run build-dev` Triggers full webpack bundling for _development_.
- `npm run watch-dev` Triggers full webpack bundling and on-going change monitoring for _development_.
- `npm run build-prod` Triggers full webpack bundling for _production_.
- `npm run watch-prod` Triggers full webpack bundling and on-going change monitoring for _production_.

## Recommendation

- Install the VSCode extension **Live Server** (by Ritwick Dey) and click on the `Go Live` button in the bottom right (will automatically refresh on saved changes).

## Optional

- Install the VSCode extension **Prettier Code Formatter** and configure VSCode to format on save and use Prettier instead of the default.

## Special Notes

- The project index.html is auto-generated in the `dist` folder as part of the webpack configuration, specifically `HtmlWebpackPlugin`.
- All build artifacts will be placed in the generated `dist` folder.
- The `dist` folder is completely emptied every triggered build (i.e. bundling event).
