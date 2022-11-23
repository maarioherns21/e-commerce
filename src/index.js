import ReactDOM from 'react-dom/client'
import App from "../src/App/App"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  ///the strick mode was delete and now is not rerendering twice fetchin data
    <App />
);