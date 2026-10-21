
const layout = document.getElementById("layout");

const panelLeftToggle =
    document.getElementById("panelLeftToggle");

const panelRightToggle =
    document.getElementById("panelRightToggle");

/* =========================
   Update Toggle Button
   ========================= */

function updateButton(button, isOpen, closedIcon) {
    button.setAttribute("aria-expanded", String(isOpen));
    button.textContent = isOpen ? "×" : closedIcon;
}

/* =========================
   Left Panel Toggle
   ========================= */

panelLeftToggle.addEventListener("click", () => {
    const isOpen = layout.classList.toggle("panel_left_open");

    updateButton(panelLeftToggle, isOpen, "☰");
});

/* =========================
   Right Panel Toggle
   ========================= */

panelRightToggle.addEventListener("click", () => {
    const isOpen = layout.classList.toggle("panel_right_open");

    updateButton(panelRightToggle, isOpen, "▤");
});

/* =========================
   Responsive Layout
   ========================= */

function updateLayout() {
    const width = window.innerWidth;

    if (width > 900) {
        layout.classList.remove(
            "panel_left_open",
            "panel_right_open"
        );
    } else if (width > 600) {
        layout.classList.remove("panel_left_open");
    }

    updateButton(
        panelLeftToggle,
        layout.classList.contains("panel_left_open"),
        "☰"
    );

    updateButton(
        panelRightToggle,
        layout.classList.contains("panel_right_open"),
        "▤"
    );
}

window.addEventListener("resize", updateLayout);

updateLayout();
