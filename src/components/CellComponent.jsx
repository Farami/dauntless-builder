import React from "react";

export default class CellComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    getRarity() {
        if(this.props.cell) {
            return this.props.cell.variants[this.props.variant].rarity;
        }

        return "empty";
    }

    onClicked() {
        this.props.onCellClicked({
            __itemType: "Cell",
            __parentType: this.props.parentType,
            __slotPosition: this.props.slotPosition,
            filters: [
            {
                field: "slot",
                value: this.props.type
            }
        ]});
    }

    render() {

        return <div className={"cell " + this.getRarity()} onClick={() => this.onClicked()}>
            <img src={"/assets/icons/perks/" + this.props.type + ".png"} />
            <span className="cell-title">{this.props.variant}</span>
        </div>;
    }
}


