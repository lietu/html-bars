# Bars

Shows bars. Exciting, I know.

## Configuration

Open up `data.json`.

Make it look like this:

```
{
  "name1": {
    "max": 40,
    "value": 25
  },
  "name2": {
    "max": 40,
    "value": 30
  }
}
```


## Running backend

Install Node.js from [https://nodejs.org/en/download/](https://nodejs.org/en/download/) (LTS is fine)

Then run:

```
npm run backend
```

Alternatively on windows you can just double-click on the `run.bat` file.


## Running frontend

Open a browser to the URL the backend shows.

It will render the bars based on the order they are in the file. If you want
to re-order them after rendering, you will have to reload the page.

If you want to render only a specific one, add the name to the URL.

So e.g. if the normal URL is `http://localhost:8123/`, and you just want to
render the bar for `foo`, the URL is `http://localhost:8123/foo`.

The frontend re-fetches the data frequently so you should see the change nearly
immediately after saving the `data.json` file.
