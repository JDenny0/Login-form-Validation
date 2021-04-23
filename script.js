// adding login message
let submitForm = $('#submitform');
messageText = $('<p id="msgLogin"></p>');
submitForm.append(messageText);
// checking validation funtion
submitForm.submit(function (e) {
  e.preventDefault();
  // taking input from user
  let userName = $('#username').val();
  let passWord = $('#password').val();
  // validate process 
  // if username is not correct and password is correct
  if (userName !== 'new_user' && passWord === '123456789') {
    $('#username').addClass('username-wrong')
    $('#username').removeClass('username-correct')
    $('#password').addClass('username-correct')
    $('#password').removeClass('username-wrong')
    $('.fa-times1').css('display', 'inline');
    $('.fa-check1').css('display', 'none');
    $('.fa-times2').css('display', 'none');
    $('.fa-check2').css('display', 'inline');
    $('#msgLogin').text('please, enter valid username').css('color', 'red');
  }
  // if username is empty and password is correct
  if (userName === '' && passWord === '123456789') {
    $('#username').addClass('username-wrong')
    $('#username').removeClass('username-correct')
    $('#password').addClass('username-correct')
    $('#password').removeClass('username-wrong')
    $('.fa-times1').css('display', 'inline');
    $('.fa-check1').css('display', 'none');
    $('.fa-times2').css('display', 'none');
    $('.fa-check2').css('display', 'inline');
    $('#msgLogin').text('please, enter username').css('color', 'red');
  }
  // if username is correct and password is not correct
  if (userName === 'new_user' && passWord !== '123456789') {
    $('#username').addClass('username-correct')
    $('#username').removeClass('username-wrong')
    $('#password').addClass('username-wrong')
    $('#password').removeClass('username-correct')
    $('.fa-times1').css('display', 'none');
    $('.fa-check1').css('display', 'inline');
    $('.fa-times2').css('display', 'inline');
    $('.fa-check2').css('display', 'none');
    $('#msgLogin').text('please, enter valid password').css('color', 'red');
  }
  // if username is correct and password is empty
  if (userName === 'new_user' && passWord === '') {
    $('#username').addClass('username-correct')
    $('#username').removeClass('username-wrong')
    $('#password').addClass('username-wrong')
    $('#password').removeClass('username-correct')
    $('.fa-times1').css('display', 'none');
    $('.fa-check1').css('display', 'inline');
    $('.fa-times2').css('display', 'inline');
    $('.fa-check2').css('display', 'none');
    $('#msgLogin').text('please, enter password').css('color', 'red');
  }
  // if username is not correct and password is  not correct
  if (userName !== 'new_user' && passWord !== '123456789') {
    $('#username').addClass('username-wrong')
    $('#username').removeClass('username-correct')
    $('#password').addClass('username-wrong')
    $('#password').removeClass('username-correct')
    $('.fa-times1').css('display', 'inline');
    $('.fa-check1').css('display', 'none');
    $('.fa-times2').css('display', 'inline');
    $('.fa-check2').css('display', 'none');
    $('#msgLogin').text('please, enter valid username and password').css('color', 'red');
  }
  // if username is not correct and password is empty
  if (userName !== 'new_user' && passWord === '') {
    $('#username').addClass('username-wrong')
    $('#username').removeClass('username-correct')
    $('#password').addClass('username-wrong')
    $('#password').removeClass('username-correct')
    $('.fa-times1').css('display', 'inline');
    $('.fa-check1').css('display', 'none');
    $('.fa-times2').css('display', 'inline');
    $('.fa-check2').css('display', 'none');
    $('#msgLogin').text('please, enter valid username and enter password').css('color', 'red');
  }
  // if username is empty and password is  not correct
  if (userName === '' && passWord !== '123456789') {
    $('#username').addClass('username-wrong')
    $('#username').removeClass('username-correct')
    $('#password').addClass('username-wrong')
    $('#password').removeClass('username-correct')
    $('.fa-times1').css('display', 'inline');
    $('.fa-check1').css('display', 'none');
    $('.fa-times2').css('display', 'inline');
    $('.fa-check2').css('display', 'none');
    $('#msgLogin').text('please, enter username and valid password').css('color', 'red');
  }
  // if username is correct and password is correct
  if (userName === 'new_user' && passWord === '123456789') {
    $('#username').addClass('username-correct')
    $('#username').removeClass('username-wrong')
    $('#password').addClass('username-correct')
    $('#password').removeClass('username-wrong')
    $('.fa-check2').css('display', 'inline');
    $('.fa-check1').css('display', 'inline');
    $('.fa-times1').css('display', 'none');
    $('.fa-times2').css('display', 'none');
    $('#msgLogin').text('Successful login!').css('color', 'green');
  }
  // if username is empty and password is empty
  if (userName === '' && passWord === '') {
    $('#username').addClass('username-wrong')
    $('#username').removeClass('username-correct')
    $('#password').addClass('username-wrong')
    $('#password').removeClass('username-correct')
    $('.fa-times1').css('display', 'inline');
    $('.fa-check1').css('display', 'none');
    $('.fa-times2').css('display', 'inline');
    $('.fa-check2').css('display', 'none');
    $('#msgLogin').text('please, enter username and password').css('color', 'red');
  }
});