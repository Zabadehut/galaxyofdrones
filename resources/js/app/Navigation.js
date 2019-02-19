import { EventBus } from '../event-bus';

export default {
    methods: {
        prev() {
            EventBus.$emit('prev-planet');
        },

        next() {
            EventBus.$emit('next-planet');
        }
    }
};
