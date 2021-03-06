
function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.` ;
}

function nowServing(line) {
  if (line.length > 0) {
    return 'Currently serving ' + line.shift() + '.' ;
  }
  else {
    return 'There is nobody waiting to be served!' ;
  }
}
function currentLine(line) {
  if (line.length > 0) {
    var output = "" ;
    for(let i = 0; i < line.length; i++) {
      output += (i + 1) + '. ' + line[i] + ', ' ;
    }
    output = output.slice(0, -2) ;
    return `The line is currently: ${output}` ;
  } else {
    return 'The line is currently empty.' ;
  }
}
