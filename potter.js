class toggle {
    constructor(id = []) {
        this.width = 60;
        this.height = this.width * 0.6;
        this.checked_icon = "";
        this.unchecked_icon = "";
        this.checked_bg = "#2196F3";
        this.unchecked_bg = "#ccc";
        this.checked_toggler_bg = "white";
        this.unchecked_toggler_bg = "white";
        this.ids = id;
        this.initialstate = "";
    }

    call_toggle() {
        this.height = this.width * 0.6;
        for (var i in this.ids) {
            this.create_toggle(i);
        }
    }

    create_toggle(index) {
        let element = document.getElementById(this.ids[index]);
        var togglehtml =
            '<label class="toggle-switch"><input type="checkbox" onchange="toggles.toggle_input(this,' +
            index +
            ')" ' +
            this.initialstate +
            '><div class="toggle-btn"></div></label>';
        element.innerHTML = togglehtml;
        this.set_style(element);
    }

    set_style(element) {
        let toggle_switch = element.getElementsByClassName("toggle-switch")[0];
        toggle_switch.style.position = "relative";
        toggle_switch.style.display = "inline-block";

        toggle_switch.style.width = this.width - 10 + "px";
        toggle_switch.style.height = this.height - 10 + "px";
        toggle_switch.style.background = this.unchecked_bg;
        toggle_switch.style.borderRadius = this.height - 10 + "px";
        toggle_switch.style.border = "5px solid " + this.unchecked_bg;
        toggle_switch.style.cursor = "pointer";
        toggle_switch.style.display = "flex";
        toggle_switch.style.justifyContent = "left";
        toggle_switch.style.transition = "all 0.4s";
        let inp = toggle_switch.getElementsByTagName("input")[0];
        inp.style.display = "none";

        let slider = element.getElementsByClassName("toggle-btn")[0];
        slider.style.position = "relative";
        slider.style.width = this.height - 10 + "px";
        slider.style.height = this.height - 10 + "px";
        slider.style.background = this.unchecked_toggler_bg;
        slider.style.borderRadius = "50%";

        slider.style.transitionDuration = "0.4s";
    }

    toggle_input(ele, i) {
        if (ele.checked == true) {
            document.getElementsByClassName("toggle-switch")[i].style.background =
                this.checked_bg;
            document.getElementsByClassName("toggle-switch")[i].style.border =
                "5px solid " + this.checked_bg;
            document.getElementsByClassName("toggle-switch")[i].style.justifyContent =
                " flex-end";
            let slider = document.getElementsByClassName("toggle-btn")[i];
            slider.style.background = this.checked_toggler_bg;
        } else {
            document.getElementsByClassName("toggle-switch")[i].style.background =
                this.unchecked_bg;
            document.getElementsByClassName("toggle-switch")[i].style.border =
                "5px solid " + this.unchecked_bg;
            document.getElementsByClassName("toggle-switch")[i].style.justifyContent =
                " flex-start";
            let slider = document.getElementsByClassName("toggle-btn")[i];
            slider.style.background = this.unchecked_toggler_bg;
        }
    }
}