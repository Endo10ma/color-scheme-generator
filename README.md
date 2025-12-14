#  Real-time Color Scheme Generator

This project is a dynamic web application that allows users to generate and display professional color palettes based on a selected base color and color scheme mode. It leverages the **Color API** to fetch data, demonstrating competency in handling external data sources and API consumption.

---

##  Live Demo

**[ Visit the Live Site Here](https://col-scheme.netlify.app/)**

---

##  Key Technologies and Implementation Details

### HTML5 & CSS3

* **User Interface (UI):** Developed a clear, single-page interface centered around user input (Color Picker, Scheme Selector) and a visual output (five color swatches).
* **Styling:** Employed modern CSS techniques, including **Flexbox**, to create a responsive and well-aligned layout for the options and the resulting color scheme display.
* **Design Focus:** Used the *Inter* font family and a dark, modern aesthetic to make the color swatches the primary focus of the application.

### JavaScript (DOM & API Integration)

* **External API Consumption:** Implemented a `fetch` request to interact with the **TheColorAPI** endpoint.
* **Dynamic Endpoint Construction:** The request URL is dynamically constructed by retrieving the user's selected base color (from `<input type="color">`) and the desired scheme mode (from `<select>`) and incorporating them as query parameters.
* **Data Parsing and Manipulation:** Handled the asynchronous JSON response (`.then(response => response.json())`).
* **Iterative DOM Update:** Used the **`.forEach`** array method to loop through the array of five returned color objects. In each iteration, the application:
    * Identifies the target color swatch element using its dynamic ID (e.g., `color1`, `color2`, etc.).
    * Updates the background color of the swatch using the fetched hex value.
    * Updates the text label at the bottom of the swatch to display the corresponding hex code, confirming the data retrieval and manipulation.

---

##  Functionality Demonstrated

* **API Proficiency:** Successfully integrated and consumed a third-party RESTful API, correctly handling URL parameters and JSON data.
* **Asynchronous Operations:** Demonstrated the ability to handle modern JavaScript asynchronous operations using `fetch` and Promises.
* **Real-time Data Visualization:** The application updates the entire color scheme instantly upon clicking the "Get Color Scheme" button, providing immediate visual feedback to the user.

    **Try it live!** You can test the **Color Scheme Generator** by visiting the deployed site here:(https://col-scheme.netlify.app/)
