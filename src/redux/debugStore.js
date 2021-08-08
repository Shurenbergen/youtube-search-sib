const debugStore = (store, isDebugging) => {
    if (isDebugging) {
        store.subscribe(() => console.log(store.getState()));
    }
}

export default debugStore;