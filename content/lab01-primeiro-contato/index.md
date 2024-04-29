# Início

Neste lab teremos o primeiro contato com a linguagem de programação *C* e com as atividades do mutirão. O objetivo deste lab é **aprender a escrever funções na linguagem *C***. Nossos exercícios terão testes automatizados e todas as funções criadas neste lab serão chamadas pelo código de testes diretamente.

Sempre que possível mostraremos exemplos em *C*, *Java* e *Python*. A ideia é poder comparar as linguagens e perceber as diferenças e similaridades com *C*. 

## Escrevendo uma função em C

<!-- Assim como em Java, *C* usa tipos de variáveis explícitos e ponto-e-vírgula no fim de cada comando. Declaramos funções de maneira bem similar também. Veja abaixo como iniciar programas nas três linguagem abaixo. 

::: code-group

```c[principal.c]
#include <stdio.h>

int main (int argc, char *argv[]) {
    printf(":)\n");
    return 0;
}
```

```java[Principal.java]
public class Principal {
    public static void main (String[] args) {
        System.out.println(":)");
    }
}
```

```python[principal.py]
print(':)')
```

:::

Notem algumas diferenças importantes:

1. Em *Java* precisamos declarar uma classe para conter nosso método `main`. Em *C* não temos classes, mas todo programa inicia com uma função `main` declarada como acima. O `main` também **sempre devolve 0**.
2. Em *C* o `#include` é como se fosse um `import` de *Java* e *C*: ele traz funções declaradas em outros arquivos para usarmos no arquivo atual. 
3. A função `printf` não coloca quebras de linha, então temos que colocar o `\n` explicitamente no fim de cada mensagem
 -->

Assim como em Java, *C* usa tipos de variáveis explícitos e ponto-e-vírgula no fim de cada comando. Declaramos funções de maneira bem similar a Java também. Veja abaixo um exemplo nas três linguagens.

::: code-group

```c[func.c]
int processa_pixel(int val) {
    return val;
}
```

```java[Principal.java]
public class Principal {
    public int processaPixel(int val) {
        return val;
    }
}
```

```python[principal.py]
def processa_pixel(val):
    return val
```

:::

Como regra geral, funções em *C* são declaradas com a seguinte estrutura. Na hora de colocar os tipos você deve tirar os **< >**.


```c
<tipo_retorno> nome_da_funcao(<tipo1> arg1, <tipo2> arg2, ....) {

    return ....;
}
```

### Fluxo de controle

Condicionais e loops em *C* são **muito parecidos** com *Java*. Veja abaixo.

::: code-group

```c[func.c]
// dentro de alguma função
if (cond) {
    ....
}

if (cond) {
    ....
} else {
    ....
}

while (cond) {
    ....
}

for (int i = 0; i < N; i++) {
    ....
}
```

```java[Principal.java]
// dentro de algum método
if (cond) {
    ....
}

if (cond) {
    ....
} else {
    ....
}

while (cond) {
    ....
}

for (int i = 0; i < N; i++) {
    ....
}
```

```python[principal.py]
# em qualquer lugar do código
if cond:
    ....


if cond:
    ....
else:
    ....


while cond:
    ....


for i in range(N):
    ....

```

:::

Com isso já conseguimos criar algumas funções simples em *C*. Siga para a próxima página para iniciar a atividade prática. 

