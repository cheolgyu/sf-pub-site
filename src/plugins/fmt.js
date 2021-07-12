const mony_fmt = new Intl.NumberFormat()


class fmt {
    date(inp) {
        return inp.slice(0, 4) + "." + inp.slice(4, 6) + "." + inp.slice(6, 8);
    }

    money(inp) {
        return mony_fmt.format(inp)
    }
    // inp: percent
    moneyColorClass(inp) {
        if (inp > 0) {
            return " txt-red ";
        } else if (inp == 0) {
            return " txt-black ";
        } else if (inp < 0) {
            return " txt-blue ";
        }
    }
}
const format = new fmt()
export default {
    install: (app, options) => {
        // Plugin code goes here
        app.config.globalProperties.$fmt = format;
        //app.provide("fmt", format);
    }
}


