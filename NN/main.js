

let c = [[1,1],[2,2]];
console.log(math.det(c));

class Neuron {

  constructor(input, weights , bias) {
    this.input = input;
    if (this.bias == undefined) {
      this.bias = Math.random();
    } else {
      for (let i = 0; i < weights.length; i++) {
        this.bias = bias;
      }
    }
    if (this.weights == undefined) {
      this.weights = Math.random();
    } else {
      for (let i = 0; i < weights.length; i++) {
        this.weights[i] = weights[i];
      }
    }
  }

  getInput(){
    return this.input;
  }

  setBias(bias) {
    this.bias = bias;
  }

  getOutput() {
    let sum = this.bias;
    for (let i = 0; i < this.weights.length ; i++) {
      sum += this.weights[i] * this.input[i];
    } 
    return this.sigmoid(sum);
  }

  getWeight(){
    return this.weights;
  }

  setInput(input) {
    this.input = input;
  };

  setWeight(weight) {
    for (let i = 0; i < weight.length; i++) {
      this.weight[i] = weight[i];
    }
  }

  sigmoid(x) {
    return 1.0 / (1.0 + Math.exp(-x));
  }

  

}

class NeuralWeb {
    constructor(firstLayer , hiddenLayerCount ) {
      // this.layer = [layerCount];
      this.firstLayer = firstLayer;
      this.output;
      this.hiddenNeuronMatrix = [hiddenLayerCount];
    }

    setup() {

    }



  
}



