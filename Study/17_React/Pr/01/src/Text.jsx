function TextBox({ selectedText, selectedTextBack, selectedTextColor }) {
  const styles = { backgroundColor: selectedTextBack, color: selectedTextColor };
  
  return ( 
    <p style={styles}>{selectedText}</p>
  );
}

export default TextBox;