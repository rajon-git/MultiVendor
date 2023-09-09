# MultiVendor

For Tailwind config, Use that's command: First goto tailwindcss website ,1) Click Docs
2)Click FrameWork Guides
3) then scroll down and click create-react-app
run this command : npm install -D tailwindcss
                   npx tailwindcss init

In tailwind.config.js  add this file : 

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

# In index.css add this file : 

@tailwind base;
@tailwind components;
@tailwind utilities;

that's it 
