const HamroPatroCalendar = () => {
  return (
    <div style={{ overflow: "hidden", width: "100%", maxWidth: "800px" }}>
      <iframe
        src="https://www.hamropatro.com/widgets/calender-full.php"
        FrameBorder="0"
        Scrolling="no"
        MarginWidth="0"
        MarginHeight="0"
        style={{
          border: "none",
          overflow: "hidden",
          width: "800px",
          height: "840px",
        }}
        allowTransparency="true"
        title="Hamro Patro Calendar"></iframe>
    </div>
  );
};

export default HamroPatroCalendar;
