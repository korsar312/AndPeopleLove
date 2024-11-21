class Polyfills {
	private at() {
		Object.defineProperty(Array.prototype, "at", {
			value: function (index: number) {
				return index >= 0 ? this[index] : this[this.length + index];
			},
			enumerable: false,
			configurable: true,
			writable: true,
		});
	}

	public checker() {
		if (!("at" in Array.prototype)) this.at();
	}
}

export default new Polyfills();
