# Tipos numéricos em *C*

Vamos olhar inicialmente para variáveis numéricas em *C*. Temos os seguintes tipos inteiros disponíveis.

| tipo          | tamanho | range                                  |
|---------------|---------|----------------------------------------|
| char          | 1 byte  | -128 .. 127                            |
| unsigned char | 1 byte  | 0 .. 255                               |
| int           | 4 bytes | -2.147.483.648 .. +2.147.483.648       |
| unsigned int  | 4 bytes | 0 .. 4.294.967.295                     |
| long          | 8 bytes | -2<sup>63</sup> ... 2<sup>63</sup> - 1 |
| unsigned long | 8 bytes | 0 ... 2<sup>64</sup>-1                 |

E os seguintes tipos fracionários

| tipo   | tamanho |
|--------|---------|
| float  | 4 bytes |
| double | 8 bytes |

Em geral usamos os tipos `int` para inteiros e `double` para fracionários. Se necessário os outros tipos podem ser usados, mas em hardware moderno podemos usar esses padrões e só nos preocupar caso seja necessário. 

Operações aritméticas respeitam as seguintes regras. De novo, elas são quase idênticas às de Java.

* toda operação aritmética em *C* mantém o tipo dos operadores. Contas entre `int` devolvem um `int` e contas entre `double` retornam um novo `double`
* quando misturamos os tipos **pode haver perda de informação**
* podemos converter explicitamente os tipos usando *casting*
* podemos criar números `double` explicitamente ao colocar uma casa decimal.


Por exemplo, veja os códigos abaixo em *C*.

```c
10 / 3 // devolve 3 -> divisão de dois inteiros
1 / 2  // devolve 0!!!

10.0 / 3 // devolve 3.33333 -> conversão automática para double por causa da casa decimal
10 / 3.0 // igual ao anterior
```

Os tipos inteiros em *C* são implementados com suporte de hardware e dão *overflow*. Ou seja, se uma variável `char` tem valor `127` (o máximo na tabela mais acima), somar `1` faz ela "dar a volta" e assumir o valor `-128`.  Os exemplos abaixo mostram esse comportamento. 

```c
unsigned char c = 0;
c + 1; // 255
char c2 = -128;
c2 - 1; // 127
```