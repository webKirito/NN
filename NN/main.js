class Neuron {

  constructor(input, weights) {
    this.input = input;
    this.output;
    for (let i = 0; i < weights.length; i++) {
      this.weights[i] = weights[i];
    }
  }

  execution(){
    let tmp;
    for (let i = 0; i < this.input.length; i++) {
      tmp += this.input[i];
    }
    this.output = tmp;
    let outArr = this.weights.forEach((item) => item * this.output);
    return outArr;
  }

  getInput(){
    return input;
  }

  getOutput() {
    return this.output;
  }

  getWeight(){
    return weight;
  }

  setInput(input) {
    this.input = input;
  };

  setWeight(weight) {
    for (let i = 0; i < weight.length; i++) {
      this.weight[i] = weight[i];
    }
  }
}

class NeuralWeb {

  constructor(enterLayer , hiddenLayers, outerLayer, activation = "sigmoid" ) {
    if activation == 'sigmoid'{
      this.activation = this.sigmoid();
      this.activationPrime = this.sigmoidPrime();
    } else
        if (activation == 'tanh') {
            this.activation = this.tanh();
            this.activationPrime = this.tanhPime();
        }
     this.enterLayer = enterLayer;
     this.hiddenLayers = hiddenLayers;
     this.outerLayer = outerLayer;
  }

  identification(dataArr){
    for (let i = 0; i < dataArr.length; i++) {
      this.enterLayer[i].setInput(dataArr[i]);
      let tmpArr = this.enterLayer[i].execution();
    }
  }

  processes(arr,nextLayer){
    for (let i = 0; i < arr.length; i++) {
      array[i]
    }
  }

  sigmoid(x) {
    return 1.0 / (1.0 + Math.exp(-x));
  }

  sigmoidPrime(x){
    return sigmoid(x) * (1.0 - sigmoid(x));
  }

  tanh(x) {
    return Math.tanh(x);
  }

   tanhPrime(x){
    return 1.0 - Math.pow(x, 2);
  }
}


var web = new NeuralWeb([new Neuron(), new Neuron()], [new Neuron(), new Neuron()] );
