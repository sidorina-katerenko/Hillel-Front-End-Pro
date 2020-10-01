function ModeSelect(viewTypes, onChange) {
    this.viewTypes = viewTypes;
    this.onChangeCallback = onChange;
    
    this.select = document.createElement("select");
    this.select.onchange = this.onChange.bind(this);
}

ModeSelect.prototype.createOptions = function() {
    return this.viewTypes.map(function(type) {
        const option = document.createElement("option");
        option.text = type;

        return option;
    });
}

ModeSelect.prototype.addOption = function(option) {
    this.select.add(option);
}

ModeSelect.prototype.onChange = function(event) {
    this.onChangeCallback(event.target.value);
}

ModeSelect.prototype.render = function() {    
    const options = this.createOptions();
    options.forEach(this.addOption.bind(this));

    return this.select;
}