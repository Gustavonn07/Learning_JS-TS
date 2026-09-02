#include <iostream>

int main() {
  // It should be 314 instead 3.14, just like 3.14 x 10^2
  double value { 3.14e2 };
  std::cout << value << std::endl;

  double value2 { 10e3 };
  double value3 { 10e4 };
  std::cout << value2 << std::endl;
  std::cout << value3 << std::endl;
  
  std::cout << value2 - value3 << std::endl;
}