document.getElementById('loanForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var firstName = document.getElementById('firstName').value.trim();
    var lastName = document.getElementById('lastName').value.trim();
    var studentID = document.getElementById('studentID').value.trim();
    var schoolYear = document.getElementById('schoolYear').value.trim();
    var computerModel = document.getElementById('computerModel').value.trim();
    var serialNumber = document.getElementById('serialNumber').value.trim();
    var signature = document.getElementById('signature').value.trim();
    var responsibilitiesChecked = document.getElementById('responsibilities').checked;
  
    if (firstName === '' || lastName === '' || studentID === '' || schoolYear === '' || computerModel === '' || serialNumber === '' || signature === '' || !responsibilitiesChecked) {
      alert('Please fill in all the required fields and agree to the terms of use.');
      return;
    }
    var confirmationMessage = 'Loan Agreement Confirmation\n\nStudent ID: ' + studentID;
    alert(confirmationMessage);
  
  });
  