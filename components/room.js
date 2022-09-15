const Room = () => {
	

	return (
		<>
      <div className="room">
	      <div className="roomLayer" style={{zIndex: 101}}>
	      	<img alt="" src="/images/roomAssets/Base Floor.png" id="floorColor" />
	      </div>
	      <div className="roomLayer" style={{zIndex: 102}}>
	      	<img alt="" src="/images/roomAssets/Base Wall.png" id="wallColor" />
	      </div>
	      <div className="roomLayer" style={{zIndex: 103}}>
					<img alt="" src="/images/roomAssets/blank.png" id="wallPaper" />
	      </div>
	      <div className="roomLayer" style={{zIndex: 104}}>
					<img alt="" src="/images/roomAssets/blank.png" id="wallTrim" />
	      </div>
	      <div className="roomLayer" style={{zIndex: 105}}>
	      	<img alt="" src="/images/roomAssets/Base Frame.png" id="frame" />
	      </div>
	      <div className="roomLayer" style={{zIndex: 106}}>
					<img alt="" src="/images/roomAssets/Base Rug.png" id="rugColor" />
	      </div>
	      <div className="roomLayer" style={{zIndex: 107}}>
					<img alt="" src="/images/roomAssets/blank.png" id="rugDesign" />
	      </div>
	      <div className="roomLayer" style={{zIndex: 108}}>
	      	<img alt="" src="/images/roomAssets/Base Window.png" id="windowType" />
	      </div>
	      <div className="roomLayer" style={{zIndex: 109}}>
					<img alt="" src="/images/roomAssets/blank.png" id="windowCurtains" />
	      </div>
	      <div className="roomLayer" id="baseBed" style={{zIndex: 110}}>
		      <div className="roomSubLayer" style={{zIndex: 111}}>
		      	<img alt="" src="/images/roomAssets/Base Bed.png" id="bedFrame" />
		      </div>
		      <div className="roomSubLayer" style={{zIndex: 112}}>
						<img alt="" src="/images/roomAssets/blank.png" id="bedDesign" />
		      </div>
		      <div className="roomSubLayer" style={{zIndex: 113}}>
						<img alt="" src="/images/roomAssets/blank.png" id="bedPillow" />
		      </div>
		      <div className="roomSubLayer" style={{zIndex: 114}}>
						<img alt="" src="/images/roomAssets/blank.png" id="bedPillow2" />
		      </div>
		      <div className="roomSubLayer" style={{zIndex: 115}}>
		      	<img alt="" src="/images/roomAssets/blank.png" id="bedSheet" />
		      </div>
	      </div>
	      <div className="roomLayer" id="baseDesk" style={{zIndex: 116}}>
		      <div className="roomSubLayer" style={{zIndex: 117}}>
						<img alt="" src="/images/roomAssets/blank.png" id="desk" />
					</div>
		      <div className="roomSubLayer" style={{zIndex: 117}}>
						<img alt="" src="/images/roomAssets/blank.png" id="chair" />
		      </div>
		      <div className="roomSubLayer" style={{zIndex: 118}}>
						<img alt="" src="/images/roomAssets/blank.png" id="deskMirror" />
		      </div>
		      <div className="roomSubLayer" style={{zIndex: 119}}>
						<img alt="" src="/images/roomAssets/blank.png" id="deskItem" />
		      </div>
	      </div>
	      <div className="roomLayer" style={{zIndex: 120}}>
					<img alt="" src="/images/roomAssets/blank.png" id="shelf" />
	      </div>
	      <div className="roomLayer" style={{zIndex: 121}}>
					<img alt="" src="/images/roomAssets/blank.png" id="shelfItem" />
	      </div>
	      <div className="roomLayer" style={{zIndex: 122}}>
					<img alt="" src="/images/roomAssets/blank.png" id="bigPlant" />
	      </div>
	      <div className="roomLayer" style={{zIndex: 123}}>
					<img alt="" src="/images/roomAssets/blank.png" id="catBed" />
	      </div>
	      <div className="roomLayer" style={{zIndex: 124}}>
					<img alt="" src="/images/roomAssets/blank.png" id="poster" />
	      </div>
	      <div className="roomLayer" style={{zIndex: 125}}>
					<img alt="" src="/images/roomAssets/blank.png" id="pictureFrame" />
	      </div>
      </div>
    </>
	);
};

export default Room;