export const get = () => JSON.parse(localStorage.getItem('state')) || undefined;
export const set = (state, props) => {
    let data = {};
    props.forEach(prop => data[prop] = state[prop]);
    localStorage.setItem('state', JSON.stringify(data));
}
