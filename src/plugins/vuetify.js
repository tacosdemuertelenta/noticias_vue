import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/dist/vuetify.min.css';


Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {
            customProperties: true,
            iconfont: 'mdi',
        },
        themes: {
            light: {
                primary: '#0D47A1',
                secondary: '#424242',
                accent: '#82B1FF',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107'
            },
        },
    },
});