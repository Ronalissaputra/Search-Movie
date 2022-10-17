class jumbotronComponent extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
            <div class="jumbotron text-center">
                <h1><span>S</span>earch<span>M</span>ovies</h1>
                <p>Cari dan temukan film action favoritmu disini..</p>
                <hr>
            </div>
        `;
    }
}

    customElements.define('jumbotron-component', jumbotronComponent);

    module.exports = jumbotronComponent;
