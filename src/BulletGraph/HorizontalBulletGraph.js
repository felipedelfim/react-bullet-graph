import React from 'react';

const HorizontalBulletGraph = React.createClass({
    render: function() {
    	let badVal = Math.min(this.props.badVal, this.props.scaleMax),
    		satisfactoryVal = Math.min(this.props.satisfactoryVal, this.props.scaleMax),
    		performanceVal = Math.min(this.props.performanceVal, this.props.scaleMax),
    		symbolMarker = Math.min(this.props.symbolMarker, this.props.scaleMax);

    	// Scale tick component props to specified component width prop
    	let widthScale = this.props.width /
    		(this.props.scaleMax - this.props.scaleMin);

    	let horizontalBulletGraphStyles = {
    		display: "flex",
    		justifyContent: "center"
    	};

    	let graphStyles = {
    		position: "relative"
    	};

    	let goodValStyles = {
    		backgroundColor: this.props.goodColor,
    		height: this.props.height + "px",
    		width: this.props.width + "px",
    		zIndex: 1
    	};

    	let titleStyles = {
    		fontSize: "18px",
    		lineHeight: this.props.height + "px",
    		margin: "0",
    		whiteSpace: "nowrap"
    	};

    	let textLabelStyles = {
    		fontSize: "12px",
    		margin: "0",
    		textAlign: "right"
    	};

    	let legendStyles = {
    		paddingRight: "10px"
    	};

    	let satisfactoryValStyles = {
    		backgroundColor: this.props.satisfactoryColor,
    		height: this.props.height + "px",
    		left: "0",
    		position: "absolute",
    		top: "0",
    		width: (this.props.satisfactoryVal - this.props.scaleMin)*widthScale + "px",
    		zIndex: 2
    	};

    	let badValStyles = {
    		backgroundColor: this.props.badColor,
    		height: this.props.height + "px",
    		left: "0",
    		position: "absolute",
    		top: "0",
    		width: (badVal - this.props.scaleMin)*widthScale + "px",
    		zIndex: 3
    	};

    	let performanceValStyles = {
    		backgroundColor: "black",
    		height: this.props.height/3 + "px",
    		left: "0",
    		marginBottom: this.props.height/3 + "px",
    		marginTop: this.props.height/3 + "px",
    		position: "absolute",
    		top: "0",
    		width: (performanceVal - this.props.scaleMin)*widthScale + "px",
    		zIndex: 4
    	};

    	let symbolMarkerWidth = this.props.width*0.01,
    		// Should not exceed boundaries qualitative range boundaries
    		symbolMarkerPos = (symbolMarker - this.props.scaleMin)*widthScale*0.99;

    	let symbolMarkerStyles = {
    		backgroundColor: "black",
    		left: symbolMarkerPos + "px",
    		height: this.props.height*0.8 + "px",
    		marginBottom: this.props.height*0.1 + "px",
    		marginTop: this.props.height*0.1 + "px",
    		position: "absolute",
    		top: "0",
    		width: symbolMarkerWidth + "px",
    		zIndex: 4
    	};

    	let quantitativeScaleStyles = {
    		left: "0",
    		position: "absolute",
    		top: this.props.height + "px"
    	};

    	let tickIncrement = (this.props.scaleMax - this.props.scaleMin) / 5;

		let ticks = Array.from({length:6}, (tick,i) => {
			let tickLeft = parseInt(i*tickIncrement*widthScale*0.996, 10),
				numLeft = tickLeft - 50,
				tickWidth = this.props.width*0.005;

			return {
				key: i,
				numStyles: {
					fontSize: "14px",
					left: numLeft + "px",
					paddingLeft: "2px",
					position: "absolute",
					textAlign: "center",
					top: "0",
					width: "100px"
				},
				tickStyles: {
					backgroundColor: "black",
					height: "10px",
					left: tickLeft + "px",
					position: "absolute",
					textAlign: "center",
					top: "-0px",
					width: tickWidth + "px"
				},
				value: i*tickIncrement + this.props.scaleMin
			}
		});

        return (
            <div className="HorizontalBulletGraph"
            	style={horizontalBulletGraphStyles}>

            	<div className="Legend" style={legendStyles}>
	 				<div className="Title">
	 					<p style={titleStyles}>{this.props.title}</p>
	 				</div>
	 				<div className="TextLabel">
	 					<p style={textLabelStyles}>{this.props.textLabel}</p>
	 				</div>
 				</div>

 				<div className="Graph" style={graphStyles}>
 					<div className="GoodVal"
 						style={goodValStyles}>
 						
 					</div>

 					{ Number.isInteger(satisfactoryVal) &&
 						<div className="SatisfactoryVal"
 							style={satisfactoryValStyles}>
 						
 					</div> }

 					{ Number.isInteger(badVal) &&
 						<div className="BadVal"
 							style={badValStyles}>
 						
 					</div> }

 					{ Number.isInteger(performanceVal) &&
 						<div className="PerformanceVal"
 							style={performanceValStyles}>

 					</div> }

 					{ Number.isInteger(symbolMarker) &&
 						<div className="SymbolMarker"
 							style={symbolMarkerStyles}>

 					</div> }

 					<div className="QuantitativeScale"
 						style={quantitativeScaleStyles}>

 						{ ticks.map( (tick) => (
 							<div key={tick.key}
 								style={tick.tickStyles}>
							</div>
 						) ) }

 						{ ticks.map( (tick) => (
 							<p key={tick.key}
 								style={tick.numStyles}>
 								{tick.value}
 							</p>
 						) ) }

 					</div>
 				</div>

            </div>
        );
    }
});

export default HorizontalBulletGraph;
